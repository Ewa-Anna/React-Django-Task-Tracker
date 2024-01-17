import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import FileUploader from "../ui/shared/FileUploader";
import { ProjectValidationSchema } from "@/lib/validation";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { DatePicker } from "../ui/shared/DatePicker";

type ProjectFormProps = {
  title: string;
  description: string;
  file: string[];
  tags: string[];
 
};

const ProjectForm = ({ project, users }: ProjectFormProps) => {
  const [formStep, setFormStep] = useState(0);

  const navigate = useNavigate()




  // 1. Define your form.
  const form = useForm<z.infer<typeof ProjectValidationSchema>>({
    resolver: zodResolver(ProjectValidationSchema),
    defaultValues: {
      title: project ? project.title : "",
      description: project ? project.description : "",
      file: project ? project.file : [],
      tags: project ? project.tags : "",
      leader: project ? project.leader : "",
      visibility: project ? project.visibility : "",
      deadline:project?project.deadline:""
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof ProjectValidationSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  users && console.log(users && users);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-9 w-full max-w-5xl"
      >
     
        <div
          className={cn("flex flex-col gap-9 w-full max-w-5xl", {
            hidden: formStep === 1,
          })}
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Project Title</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>

                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">
                  Project overview
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="shad-textarea custom-scrollbar"
                    {...field}
                  />
                </FormControl>

                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />
      <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">
                  Add Tags (separated y comma " , "
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="JS, React, NextJS, Node"
                    type="text"
                    className="shad-input"
                    {...field}
                  />
                </FormControl>

                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />
          <div className="flex gap-5 flex-wrap">
            <div className="flex-1">
              <FormField
                control={form.control}
                name="visibility"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Visibility</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a project visibility" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                      
                              <SelectItem value={"public"}>Public</SelectItem>
                              <SelectItem value={"private"}>Private</SelectItem>
                      
                       
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex-1">
              <FormField
                control={form.control}
                name="leader"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Leader</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a project leader" />
                        </SelectTrigger>
                      </FormControl>
                    
                      <SelectContent>
                        {users &&
                          users?.results.map((user) => {
                          
                            return (
                              <SelectItem value={user.email}>{user.email}</SelectItem>
                            );
                          })}
                       
                      </SelectContent>
                  
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex-1 flex-col">
            <FormField
                control={form.control}
                name="deadline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Deadline</FormLabel>
                
                      <FormControl>
                    <DatePicker  onChange={(newDate) => field.onChange(newDate)}  />
                      </FormControl>
                    
               

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

    
        </div>
        <div
          className={cn({
            hidden: formStep === 0,
          })}
        >
          <FormField
            control={form.control}
            name="file"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Add files</FormLabel>
                <FormControl>
                  <FileUploader
                    fieldChange={field.onChange}
                    mediaUrl={project?.imageUrl}
                  />
                </FormControl>

                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-4 items-center justify-end">
          <Button type="button" className="shad-button_dark_4" onClick={()=>navigate(-1)}>
            Cancel
          </Button>
          <Button
            // shad-button_primary
            type="submit"
            className={cn(" whitespace-nowrap ", {
              hidden: formStep === 0,
            })}
          >
            Create
          </Button>
          <Button
              className={cn(" whitespace-nowrap ", {
                hidden: formStep === 1,
              })}
            variant="ghost"
            onClick={() => {
              form.trigger(['title','description','leader','visibility','tags'])
const titleState= form.getFieldState("title");
const descriptionState= form.getFieldState("description");
const leaderState= form.getFieldState("leader");
const visibilityState= form.getFieldState("visibility");
const tagsState= form.getFieldState("tags");

if(!titleState.isDirty || titleState.invalid)return;
if(!descriptionState.isDirty || descriptionState.invalid)return;
if(!leaderState.isDirty || leaderState.invalid)return;
if(!visibilityState.isDirty || visibilityState.invalid)return;
if(!tagsState.isDirty || tagsState.invalid)return;
              setFormStep((prev)=>prev+1);
            }}
          >
            Next step <ArrowRight className="w-4 h-4 ml-2 " />
          </Button>

          <Button
            // shad-button_primary
            type="submit"
            className={cn(" whitespace-nowrap ", {
              hidden: formStep === 0,
            })}
            onClick={()=>setFormStep((prev)=>prev-1)}
          >
            <ArrowLeft/>
            Go back
          </Button>

        </div>
      </form>
    </Form>
  );
};

export default ProjectForm;
